export async function getMessage(){
    const data = await fetch('http://localhost:5000/all_users')
    console.log(data)
}