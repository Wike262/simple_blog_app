

interface Props{
	path: string,
	data: any
	token?: string
}

const Api = ({path,data,token}:Props)=>{
	fetch('http://localhost:3000/api/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(req),
	})

	const post(path,data,token){
return fetch(`${path}`,{
	method:'POST',
	headers:{
		'Content-Type':'application/json;charset=utf-8'
	}
})
	}

}

export default Api