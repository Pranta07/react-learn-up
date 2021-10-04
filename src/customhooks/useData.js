import { useEffect, useState } from "react";

const useData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("./fakeData.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    // console.log(data);
    return [data, setData];
};

export default useData;
