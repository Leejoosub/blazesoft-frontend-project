import styles from "./index.module.css";
import Modal, { BasicModalProps } from "..";
import { bookListSlice } from "@/lib/features/bookList/bookListSlice";
import { useAppDispatch } from "@/lib/hooks";
import { BookCategories, bookCategories } from "@/types/bookdata";

export default function AddBookModal(props: BasicModalProps) {
  const dispatch = useAppDispatch();

  const handleAddNewBook = (formData: FormData) => {
    try {
      // type checking for Typescript
      const price = formData.get("price");

      if (
        price === null ||
        isNaN(Number(price)) ||
        typeof Number(price) !== "number"
      ) {
        throw "Invalid Number";
      }

      const category = formData.get("category");
      if (
        category === null ||
        (typeof category === "string" &&
          !bookCategories.includes(category as BookCategories))
      ) {
        throw "Invalid Category";
      }

      const newBook = {
        title: formData.get("title") as string,
        price: Number(price),
        category: category as BookCategories,
        description: formData.get("description") as string,
      };

      dispatch(bookListSlice.actions.addBook(newBook));

      props.close();
    } catch (e) {
      alert(e);
    }
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
