const NotAvailable = () =>{


    return (
        <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="mt-4"
      >
        You are Not authorized to view / create secrets . Please
        <button className="btn btn-primary mx-2">
          <a href="/" className="text-white text-decoration-none">
            Login{" "}
          </a>{" "}
        </button>{" "}
        or{" "}
        <button className="btn btn-primary mx-2">
          {" "}
          <a href="/register" className="text-white text-decoration-none">
            Register
          </a>
        </button>
      </p>
    )
}

export default NotAvailable;