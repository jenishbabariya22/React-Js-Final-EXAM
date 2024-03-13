import React, { useEffect, useState } from 'react'

function Movies() {

    const [budget, setbudget] = useState("")
    const [category, setcategory] = useState("")
    const [amount, setamount] = useState("")
    const [update, setupdate] = useState("")
    const [rec, setrec] = useState([])
    const [record, setrecord] = useState([])
    const id = Math.floor(Math.random() * 100)
    let [edi, setedi] = useState()
    console.log(record.amount);

    const userbudget = () => {

        let reo = { budget }
        let data = [...rec, reo]
        localStorage.setItem("user", JSON.stringify(data))
        setrec(data)

        setbudget("")
    }

    const checkamount = () => {
        let obj = { amount, category, id }
        let data = [...record, obj]

        localStorage.setItem("user", JSON.stringify(data))

        setrecord(data)
        localStorage.setItem("user", JSON.stringify(data))

        setamount("")
        setcategory("")
    }

    const deleted = (id) => {
        let data = [...record]

        let remove = data.filter((val) => {
            return val.id != id
        })
        setrecord(remove)
        localStorage.setItem("user", JSON.stringify(remove))
    }

    const edit = (id) => {
        let data = [...record]

        let edit = data.find((val) => {
            return val.id == id
        })

        setedi(id)
        setamount(edit.amount)
        setcategory(edit.category)
    }

    const updatedd = () => {
        let olddata = JSON.parse(localStorage.getItem("user"))
       console.log(olddata);
        
    }

    useEffect(() => {
        let old = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrec(old)
        setrecord(old)
        updatedd()
    }, [])

    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className='shadow' style={{ width: "500px", padding: "20px", margin: "40px" }}>
                        <h2 style={{ marginBottom: "10px" }}>Budget</h2>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">$</span>
                            <input onChange={(e) => setbudget(e.target.value)} value={budget} type="number" className="form-control" placeholder="Enter Total Amount" aria-label="Enter Total Amount" aria-describedby="addon-wrapping" />
                        </div>
                        <button style={{ background: "#587ef4", border: "0", color: "white", height: "40px", marginTop: "10px", padding: "20px", lineHeight: "0px" }} onClick={userbudget}>Set Budget</button>
                    </div>
                    <div className='shadow' style={{ width: "300px", padding: "20px", margin: "20px" }}>
                        <h2 style={{ marginBottom: "10px" }}>Expences</h2>
                        <div className="input-group flex-nowrap" style={{ marginBottom: "10px" }}>
                            <input onChange={(e) => setcategory(e.target.value)} value={category} type="text" className="form-control" placeholder="Enter Category" aria-label="Enter Total Amount" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group flex-nowrap ">
                            <input onChange={(e) => setamount(e.target.value)} value={amount} type="number" className="form-control" placeholder="Enter Amount" aria-label="Enter Total Amount" aria-describedby="addon-wrapping" />
                        </div>
                        {
                            (edi) ? <button type="button" onClick={checkamount} class="btn btn-primary m-2">Edit</button> : <button style={{ background: "#587ef4", border: "0", color: "white", height: "40px", marginTop: "10px", padding: "20px", lineHeight: "0px" }} onClick={checkamount}>Check Amount</button>
                        }
                    </div>
                </div>

                <div className="d-flex" style={{ justifyContent: "space-between", background: "#587ef4", padding: "30px", borderRadius: "20px", color: "white", margin: "20px" }}>
                    <div>
                        <p>Total Budget</p>
                        {
                            rec.map((val) =>
                                <h2>{val.budget}</h2>
                            )
                        }
                    </div>
                    <div>
                        <p>Expences</p>
                        {
                            record.map((val) => {
                                return (
                                    <h2>{val.amount}</h2>
                                )
                            })
                        }
                    </div>
                    <div>
                        <p>Total Amount</p>
                        <h2>{record.amount - rec.budget}</h2>
                    </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <div style={{ margin: "30px 0 30px 0" }}>
                        <h2>Expence List</h2>
                    </div>
                    <div>
                        {
                            record.map((val) =>
                                <div className="d-flex shadow" style={{ justifyContent: "space-between", padding: "20px" }}>

                                    <h2>{val.amount}</h2>

                                    <h2>{val.category}</h2>

                                    <div>
                                        <button type="button" onClick={() => edit(val.id)} class="btn btn-primary me-2">Edit</button>
                                        <button type="button" onClick={() => deleted(val.id)} class="btn btn-danger">Delete</button>
                                    </div>

                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies