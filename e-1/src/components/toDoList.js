import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getToDoList, setPageSize } from '../reducers/toDoListReducer';

const ToDoList = () => {
    const dispatch = useDispatch();
    const { toDoListReducer } = useSelector((state) => state);

    useEffect(() => {
        _getToDos();
    }, []);

    useEffect(() => {
        _getToDos();
    }, [toDoListReducer.pageSize]);

    const _getToDos = () => {
        dispatch(getToDoList(toDoListReducer.pageSize));
    }

    const _setPageSize = (pageSize) => {
        dispatch(setPageSize(pageSize));
    }

    return (
        <Fragment>
            <div className="container py-2">
                <div className="d-flex justify-content-between">
                    <h1> TO DO List </h1>
                    <button
                        className="btn btn-info"
                        onClick={() => _getToDos()}>
                        Get To Dos
                    </button>
                </div>

                {toDoListReducer.loder && <p> Loading ... </p>}

                {(toDoListReducer.toDoList && toDoListReducer.toDoList.length > 0) &&
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
                                {toDoListReducer.toDoList.map((element, index) => {
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
                                    <li className={`page-item ${toDoListReducer.pageSize == 5 && 'active'}`}>
                                        <a className="page-link" href="#" onClick={() => _setPageSize(5)}>5</a>
                                    </li>
                                    <li className={`page-item ${toDoListReducer.pageSize == 10 && 'active'}`}>
                                        <a className="page-link" href="#" onClick={() => _setPageSize(10)}>10</a>
                                    </li>
                                    <li className={`page-item ${toDoListReducer.pageSize == 15 && 'active'}`}>
                                        <a className="page-link" href="#" onClick={() => _setPageSize(15)}>15</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>}

                {((!toDoListReducer.loder) && (toDoListReducer.toDoList && toDoListReducer.toDoList.length <= 0)) &&
                    <h3 className="text-danger"> No Data Found</h3>}
            </div>
        </Fragment>
    )
}

export default ToDoList;