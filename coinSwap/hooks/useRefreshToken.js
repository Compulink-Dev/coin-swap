import axios from "axios";


function useRefreshToken() {

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        })
    }

    return (
        refresh
    )
}

export default useRefreshToken 