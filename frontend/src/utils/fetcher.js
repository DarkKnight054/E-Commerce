const fetcher = async(...args)=>{
    const res = await fetch(...args);
    const data = res.json();
    return data;
}
export default fetcher;