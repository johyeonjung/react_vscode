import Swal from "sweetalert2";

function Promise01() {

    //promise 리턴이면 then을 찍어야 함
    const axios = {
        get: (url) => {
            return new Promise((rs, rj) => {
                console.log(url + "로 요청");
                setTimeout(() => {
                    console.log("응답");
                    rs({
                        status : 200,
                        data : [10,20,30,40],

                    });
                }, 2000);
            });
        }
    }
    
    axios.get("http://192.168.2.101:8080/nums")
    .then(r => {
        console.log(r);
        console.log(r.status);
        console.log(r.data);
    })

    axios.get("http://192.168.2.101:8080/users")
    .then(r => {
        console.log(r);
        console.log(r.status);
        console.log(r.data);
        // alert("알림 내용");
        console.log("콘솔 알림");
    })

    const getRequest = async (url) => {
        const r = await axios.get(url);
        console.log(r);
        console.log(r.status);
        console.log(r.data);
        return r;
    }
    const requests = async () => {
        const r1 = await getRequest("http://192.168.2.101:8080/users");
        const r2 = await getRequest("http://192.168.2.101:8080/names");
        const r3 = await getRequest("http://192.168.2.101:8080/nums");
        const r4 = await getRequest("http://192.168.2.101:8080/products");
    }

    getRequest("http://192.168.2.101:8080/users");

    const handleOnClick = () => {
    //     Swal.fire({
    //         title: "알림내용",
    //         showCancelButton: true,
    //         input: "text"
    //     }).then( (r) => {
    //         console.log(r);
    //         console.log("콘솔");
    //     });
    //     alert("알림내용");
    // }
    // await Swal.fire({title: "타이틀", input : "text"});
    // console.log("콘솔");
    }
    

    return <>
    <button onClick={handleOnClick}>클릭</button>
    </>
}

export default Promise01;