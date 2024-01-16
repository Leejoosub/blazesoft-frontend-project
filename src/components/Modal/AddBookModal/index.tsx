import styles from "./index.module.css";
import Modal, { BasicModalProps } from "..";
import { bookListSlice } from "@/lib/features/bookList/bookListSlice";
import { useAppDispatch } from "@/lib/hooks";
import { bookCategories } from "@/types/bookdata";

export default function AddBookModal(props: BasicModalProps) {
  const dispatch = useAppDispatch();

  const handleAddNewBook = (formData: FormData) => {
    const newBook = {
      title: formData.get("title"),
      price: formData.get("price"),
      category: formData.get("category"),
      description: formData.get("description"),
    };

    dispatch(bookListSlice.actions.addBook(newBook));

    props.close();
  };

  const elementSelectCategory = bookCategories.map((category, index) => {
    return (
      <option key={`selectCategoryOption_${index}`} value={category}>
        {category}
      </option>
    );
  });
  return (
    <Modal isOpen={props.isOpen} close={props.close}>
      <div className={styles.contentContainer}>
        <div>Add a new book!</div>
        <form action={handleAddNewBook}>
          <label>Title: </label>
          <input
            type="string"
            name="title"
            placeholder="Harry Potter"
            required
          />
          <label>Price: </label>
          <input
            type="number"
            name="price"
            placeholder="12.35"
            step="0.01"
            required
          />

          <label>Description: </label>
          <textarea
            name="description"
            placeholder="A great book about wizards!"
          />

          <br />
          <label>Category</label>
          <select name="category" required>
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
