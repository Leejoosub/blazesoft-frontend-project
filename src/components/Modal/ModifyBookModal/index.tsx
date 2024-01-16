import { bookListSlice } from "@/lib/features/bookList/bookListSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Modal, { BasicModalProps } from "..";
import styles from "./index.module.css";
import { bookCategories } from "@/types/bookdata";

interface ModifyBookModal extends BasicModalProps {
  index: number;
}

export default function ModifyBookModal(props: ModifyBookModal) {
  const book = useAppSelector((state) => state.bookList.books[props.index]);
  const dispatch = useAppDispatch();

  const handleModifyNewBook = (formData: FormData) => {
    const newBook = {
      title: formData.get("title"),
      price: formData.get("price"),
      category: formData.get("category"),
      description: formData.get("description"),
    };

    dispatch(bookListSlice.actions.modifyBook([newBook, props.index]));
    props.close();
  };

  const elementSelectCategory = bookCategories.map((category, index) => {
    return (
      <option
        key={`selectCategoryOption_${index}`}
        // selected={book.category === category}
      >
        {category}
      </option>
    );
  });

  return (
    <Modal isOpen={props.isOpen} close={props.close}>
      <div className={styles.contentContainer}>
        <div>Modify Book</div>
        <form action={handleModifyNewBook}>
          <label>Title: </label>
          <input
            type="string"
            name="title"
            placeholder="Harry Potter"
            defaultValue={book.title}
            required
          />
          <label>Price: </label>
          <input
            type="number"
            name="price"
            placeholder="12.35"
            step="0.01"
            required
            defaultValue={book.price}
          />

          <label>Description: </label>
          <textarea
            name="description"
            placeholder="A great book about wizards!"
            defaultValue={book.description}
          />

          <br />
          <label>Category</label>
          <select name="category" required defaultValue={book.category}>
            {elementSelectCategory}
          </select>

          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Modal>
  );
}
