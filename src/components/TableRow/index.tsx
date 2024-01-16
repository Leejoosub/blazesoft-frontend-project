import { BookCategories } from "@/types/bookdata";
import styles from "./index.module.css";
import { bookListSlice } from "@/lib/features/bookList/bookListSlice";
import { useAppDispatch } from "@/lib/hooks";
import ModifyBookModal from "../Modal/ModifyBookModal";
import { useState } from "react";

interface TableRowProps {
  title: string;
  category: BookCategories;
  price: number;
  colorRow?: boolean;
  index: number;
}
export default function TableRow(props: TableRowProps) {
  const [modifyModalOpen, setModifyModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <>
      <ModifyBookModal
        isOpen={modifyModalOpen}
        close={() => {
          setModifyModalOpen(false);
        }}
        index={props.index}
      />
      <div
        className={`${styles.rowContainer} ${
          props.colorRow ? styles.coloredRow : ""
        }`}
        onClick={() => {
          setModifyModalOpen(true);
        }}
      >
        <div className={styles.bookTitle}>{props.title}</div>
        <div className={styles.bookCategory}>{props.category}</div>
        <div className={styles.bookPrice}>
          <p>${props.price}</p>
        </div>
        <div
          className={styles.bookDelete}
          onClick={() =>
            dispatch(bookListSlice.actions.removeBook(props.index))
          }
        >
          <button className={styles.deleteButton}>delete</button>
        </div>
      </div>
    </>
  );
}
