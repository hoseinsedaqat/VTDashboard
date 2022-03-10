function setLocalStorage(name:string,data:{id:string,todo:string}[]):void{
    
    localStorage.setItem(`${name}`,JSON.stringify(data))

}

export default setLocalStorage