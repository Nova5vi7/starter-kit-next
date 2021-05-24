import axios from "axios";
// import { PRODUCTS_URL } from "@/constant/common";

const fetchData = async () => {
	const result = await axios("https://gist.githubusercontent.com/ytkonaft/73e288815f259f054e7108731418333d/raw/d4a6a692ecfa3a3afe29559e3677df57fc114414/test.json");
	return result.data.reduce((newObj, data) => {

		newObj[data.id] = data
		return newObj

	}, {})

};

export default fetchData;