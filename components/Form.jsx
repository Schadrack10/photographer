const Form = () => {
    return (
        <div style={{
            margin:"6px 185px 0px",
            padding:"2px 24px 15px 24px",
            boxSizing:"border-box",
        }}>
        <div style={{backgroundColor: "#f1f1f1", padding:"34px 24px", lineHeight:"1.5"}}>
            <h3 style={{
                fontFamily: "Arial,sans-serif",
                fontWeight: "400",
                fontSize:"24px",
                margin: "10px 0",
                textAlign: "center",
            }}>Contact</h3>

            <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus.</p>

            <form >
                <div style={{margin:"16px 0px 16px 0px"}}>
                    <label>Name</label>
                    <input style={{width:"100%", padding:"11px",border:"none", border:"1px #ccc solid "}} type="text" />
                </div>

                <div style={{margin:"16px 0px 16px 0px"}}>
                    <label>Email</label>
                    <input style={{width:"100%", padding:"11px",border:"none", border:"1px #ccc solid "}} type="text" />
                </div>

                <div style={{margin:"16px 0px 16px 0px"}}>
                    <label>Message</label>
                    <input style={{width:"100%", padding:"11px",border:"none", border:"1px #ccc solid "}} type="text" />
                </div>

                <button style={{
                    padding:"11px 16px",
                    background:"#616161",
                    color:"white",
                    width:"100%",
                    border:"none",
                    cursor:"pointer"
                }}>Send</button>

                <p style={{lineHeight:"1.5", padding:"12px 0px"}}>Powered by <a style={{textDecoration:"underline"}}>w3.css</a></p>
                
            </form>
        </div>
            
        </div>
    );
}



export default Form;