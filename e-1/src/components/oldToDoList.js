import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getToDoList, setPageSize } from '../actions/toDoListAction';

const OldToDoList = () => {
    const dispatch = useDispatch();
    const { oldToDoListReducer } = useSelector((state) => state);

    useEffect(() => {
        _getToDos();
    }, []);

    useEffect(() => {
        _getToDos();
    }, [oldToDoListReducer.pageSize]);

    const _getToDos = () => {
        dispatch(getToDoList(oldToDoListReducer.pageSize));
    }

    const _setPageSize = (pageSize) => {
        dispatch(setPageSize(pageSize));
    }

    return (
        <Fragment>
            <div className="container py-2">
                <div className="d-flex justify-content-between">
                    <h1> Old TO DO List </h1>
                    <button
                        className="btn btn-info"
                        onClick={() => _getToDos()}>
                        Get To Dos
                    </button>
                </div>

                {oldToDoListReducer.loder && <p> Loading ... </p>}

                {(oldToDoListReducer.toDoList && oldToDoListReducer.toDoList.length > 0) &&
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">User ID</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Completed</th>
                                </tr>
                            </thead>
                            <tbody>
                                {oldToDoListReducer.toDoList.map((element, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{element.userId}</th>
                                            <td scope="row">{element.id}</td>
                                            <td scope="row">{element.title}</td>
                                            <td scope="row">{`${element.completed ? 'Completed' : 'Not Completed'}`}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="d-flex">
                            <p className="my-2"> Records: </p>
                            <nav aria-label="Page navigation">
                                <ul className="pagination">
                                    <li className={`page-item ${oldToDoListReducer.pageSize == 5 && 'active'}`}>
                                        <a className="page-link" href="#" onClick={() => _setPageSize(5)}>5</a>
                                    </li>
                                    <li className={`page-item ${oldToDoListReducer.pageSize == 10 && 'active'}`}>
                                        <a className="page-link" href="#" onClick={() => _setPageSize(10)}>10</a>
                                    </li>
                                    <li className={`page-item ${oldToDoListReducer.pageSize == 15 && 'active'}`}>
                                        <a className="page-link" href="#" onClick={() => _setPageSize(15)}>15</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>}

                {((!oldToDoListReducer.loder) && (oldToDoListReducer.toDoList && oldToDoListReducer.toDoList.length <= 0)) &&
                    <h3 className="text-danger"> No Data Found</h3>}
            </div>
        </Fragment>
    )
}

export default OldToDoList;