


const History = (props) =>
{

    const {history} = props
if(history !== null) {
return (
    <div className="history">
        <table  width="25%" border="1">
            <thead>
            <tr >
                <td>&nbsp;Data</td>
                <td>&nbsp;Status</td>
            </tr>
            </thead>
            <tbody>
            {history.map((history,i) =>
                <tr key={i} >
                    <td>&nbsp;{history.created_at}</td>
                    <td>&nbsp;{history.status}</td>
                </tr>
            )}
            </tbody>
        </table>

        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>


    </div>
)
}

else return (
    <>
        </>
)
}

export default History;