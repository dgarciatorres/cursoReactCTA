export default function User(){
    const user = undefined;

    if(!user){
        return (<button>Login</button>)
    }

    return (<div> User: {user}</div>)

}