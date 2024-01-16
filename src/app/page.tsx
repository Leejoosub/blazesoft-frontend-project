"use client";
import styles from "./page.module.css";
import React, { useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import TopBar from "@/components/Topbar";
import TopTableRow from "@/components/TableRow/TopTableRow";
import TableRow from "@/components/TableRow";
import AddBookModal from "@/components/Modal/AddBookModal";

export default function Home() {
  const [addBookModalOpen, setAddBookModalOpen] = useState(false);

  const books = useAppSelector((state) => state.bookList.books);
  const elementBooks = books.map((book, index) => {
    return (
      <TableRow
        key={`bookrow_${index}`}
        title={book.title}
        price={book.price}
        category={book.category}
        colorRow={index % 2 === 0}
        index={index}
      />
    );
  });

  return (
    <div className={styles.pageContainer}>
      <AddBookModal
        isOpen={addBookModalOpen}
        close={() => setAddBookModalOpen(false)}
      />
      <TopBar />
      <div className={styles.bodyContainer}>
        <button
          className={styles.addRowButton}
          onClick={() => {
            setAddBookModalOpen(true);
          }}
        >
          Add New Book +
        </button>
        <TopTableRow />
        {elementBooks}
      </div>
    </div>
  );
}
