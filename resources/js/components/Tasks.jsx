import React, { useState } from "react";
import { Button } from "./Button";

export const Task = ({ data, getTasks }) => {
    const [modal, setmodal] = useState(false);

    const handleRemoveTask = async () => {
        const response = await axios.delete(
            `${import.meta.env.VITE_API_URL}/tasks/${data.id}`
        );
        if (response.data.status === "success") {
            getTasks();
        }
    };
    const handleClose = () => {
        setmodal(false);
    };

    return (
        <div className="col my-2">
            <div className="card p-2">
                <div className=" my-3">
                    <h3>{data.title}</h3>
                </div>
                <p>{data.description}</p>

                <Button
                    classButton="btn-danger"
                    title="Delete"
                    onClick={() => setmodal(true)}
                />
                {modal && (
                    <div
                        className="modal fade show d-block"
                        tabIndex="-1"
                        role="dialog"
                    >
                        <div
                            className="modal-dialog"
                            role="document"
                            style={{ zIndex: 1050 }}
                        >
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        Want to delete: {data.title}?
                                    </h5>
                                    <button
                                        type="button"
                                        className="close"
                                        onClick={handleClose}
                                    >
                                        <span>&times;</span>
                                    </button>
                                </div>

                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleRemoveTask()}
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Background overlay */}
                        <div
                            className="modal-backdrop fade show z-0"
                            onClick={handleClose}
                        ></div>
                    </div>
                )}
            </div>
        </div>
    );
};
