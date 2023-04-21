import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ onChangePage }) => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLable="..."
        nextLabel="next"
        onPageChange={(event) => {
          onChangePage(event.selected + 1);
        }}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLavel="prev"
        renderOnZeroPageCount={null}></ReactPaginate>
    </div>
  );
};

export default Pagination;
