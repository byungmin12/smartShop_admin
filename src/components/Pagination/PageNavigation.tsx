import React from 'react';import PageButton from "./PageButton";interface IPageNavigation {    paginationButtonNumber: number;    pageNumber: number;    end : number;    handlerChangePageNumber: (direction? : "plus"| "minus") => (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;}function PageNavigation({paginationButtonNumber, end, pageNumber , handlerChangePageNumber}:IPageNavigation) {    return (        <div className="pagiNation-Wrapper">            <PageButton isSelected={false} isDirection="minus" value="<" handlerChangePageNumber={handlerChangePageNumber} isDisabled={pageNumber===1} />            {                (pageNumber >= Math.ceil(end/2) )  &&                <>                    <PageButton value={1} isSelected={pageNumber ===1} isDirection={undefined} handlerChangePageNumber={handlerChangePageNumber}  />                    ...                </>            }            {                Array(end < paginationButtonNumber ? end : paginationButtonNumber).fill(0).map((_,idx)=>{                    if(end < paginationButtonNumber){                        return <PageButton isSelected={pageNumber=== idx+1 }  value={idx+1} handlerChangePageNumber={handlerChangePageNumber}                         key={idx+1}                        />                    }                    if(paginationButtonNumber ===5){                        if(pageNumber +3 >= end){                            return <PageButton isSelected={pageNumber === -1+idx+(end) -3} value={(end) -4+idx} handlerChangePageNumber={handlerChangePageNumber}                                               key={(end) -4+idx}                            />                        }                        return <PageButton isSelected={pageNumber === idx+1 } value={ idx+1 } handlerChangePageNumber={handlerChangePageNumber}                        key={idx+1 }                        />                    }                    return <PageButton isSelected={pageNumber === (pageNumber-1) + idx} value={ (pageNumber-1) + idx} handlerChangePageNumber={handlerChangePageNumber} key={(pageNumber-1) + idx} />                })            }            {                ((pageNumber <= -4+(end) ) && end > paginationButtonNumber) &&                <>                    ...                    <PageButton isSelected={pageNumber === end} value={end} handlerChangePageNumber={handlerChangePageNumber}/>                </>            }            <PageButton isSelected={false} isDisabled={pageNumber===end} value=">" isDirection="plus" handlerChangePageNumber={handlerChangePageNumber} />        </div>    );}export default React.memo(PageNavigation);