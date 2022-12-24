import React from 'react';import PageNumberSelector, {IPageNumberSelector} from "./PageNumberSelector";import PageNavigation, {IPageNavigation} from "./PageNavigation";interface IPagination extends IPageNavigation, IPageNumberSelector{}function Pagination({handlerPrevNext,buttons,handlerSetCurrentPage,handlerSetPerPage,perPage,currentPage}:IPagination) {    return (        <tfoot className="pagination">        <tr>            <th scope="row" colSpan={7}>            <PageNumberSelector perPage={perPage} handlerSetPerPage={handlerSetPerPage} />            <PageNavigation currentPage={currentPage} handlerPrevNext={handlerPrevNext} buttons={buttons} handlerSetCurrentPage={handlerSetCurrentPage} />            </th>        </tr>        </tfoot>    );}export default Pagination;