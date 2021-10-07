
export default function BodyPlayerGame() {
    return (
        <div className="body-bg">
            <div className="form-container">
                <div className="form">
                    <h1>Input Player Data</h1>
                    <form >
                        <label className="label-avatar">
                            <input className="form-avatar"type="file"/>
                            <figure className="figure-personal">
                                <img className="personal-avatar" src="/images/avatar.png" alt="avatar"/>
                            </figure>
                        </label>
                        <input 
                        type="text" 
                        placeholder="Input your name" 
                        name="name"
                        // value={email}
                        // // onChange={(e) => setEmail(e.target.value)} 
                        required />
                        <button 
                        className="button-register"
                        type="submit" 
                        // onClick={handleSubmit}
                        >
                           Submit
                        </button>
                    </form>
                </div>
                <div className="img-side"></div>
            </div>
        </div>
    )
}
