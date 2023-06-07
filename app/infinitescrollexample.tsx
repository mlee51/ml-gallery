'use client'
import React, { useEffect, useReducer, useCallback, useRef } from 'react';

export default function App() {
    function importAll(r: any) {
        return r.keys().map(r);
    }
      
      const images: any = importAll(require?.context('./images/', false, /\.(png|jpe?g|svg)$/));
    //   console.log(images.default)
    // const imgReducer = (state, action) => {
    //     switch (action.type) {
    //         case 'STACK_IMAGES':
    //             return { ...state, images: state.images.concat(action.images) }
    //         case 'FETCHING_IMAGES':
    //             return { ...state, fetching: action.fetching }
    //         default:
    //             return state;
    //     }
    // }
    // const pageReducer = (state: any, action : any) => {
    //     switch (action.type) {
    //         case 'ADVANCE_PAGE':
    //             return { ...state, page: (state.page + 1) % 4 }
    //         default:
    //             return state;
    //     }
    // }
    // const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 })
    // const [imgData, imgDispatch] = useReducer(imgReducer, { images: [], fetching: true })
    // useEffect(() => {
    //     console.log('hi')
    //     imgDispatch({ type: 'FETCHING_IMAGES', fetching: true })
    //     fetch(`https://picsum.photos/v2/list?page=${pager.page}&limit=10`)
    //         .then(data => data.json())
    //         .then(images => {
    //             imgDispatch({ type: 'STACK_IMAGES', images })
    //             imgDispatch({ type: 'FETCHING_IMAGES', fetching: false })
    //         })
    //         .catch(e => {
    //             // handle error
    //             imgDispatch({ type: 'FETCHING_IMAGES', fetching: false })
    //             return e
    //         })
    // }, [imgDispatch, pager.page])

    // let bottomBoundaryRef = useRef(null);
    // const scrollObserver = useCallback(
    //     node => {
    //         new IntersectionObserver(entries => {
    //             entries.forEach(en => {
    //                 if (en.intersectionRatio > 0) {
    //                     pagerDispatch({ type: 'ADVANCE_PAGE' });
    //                 }
    //             });
    //         }).observe(node);
    //     },
    //     [pagerDispatch]
    // );
    // useEffect(() => {
    //     if (bottomBoundaryRef.current) {
    //         scrollObserver(bottomBoundaryRef.current);
    //     }
    // }, [scrollObserver, bottomBoundaryRef]);

    return (
        <div>
            <div id='images'>
                <div >
                    {images.map((image:any, index:number) => {
                        return (
                            <div key={index}>
                                <div className="card-body">
                                    <img className='w-full h-auto'
                                        src={image.default.src}
                                    />
                                </div>
                                {/* <div className="card-footer">
                                    <p className="card-text text-center text-capitalize text-primary">Shot by: {author}</p>
                                </div> */}
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* {imgData.fetching && (
                <div className="text-center bg-secondary m-auto p-3">
                    <p className="m-0 text-white">Getting images</p>
                </div>
            )} */}
            {/* <div id='page-bottom-boundary' style={{ border: '1px solid red' }} ref={bottomBoundaryRef}></div> */}
        </div>
    );
}