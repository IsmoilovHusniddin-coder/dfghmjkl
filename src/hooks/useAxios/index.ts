import axios from "axios";
import Cookies from "js-cookie";

interface AxiosType {
  url: string;
  params?: object;
  method?: "GET" | "POST" | "DELETE" | "PUT";
  body?: object;
  header?: object; // header qo'shildi
}

export const useAxios = () => {
  const request = ({
    url,
    method = "GET",
    params = {},
    header = {},
    body = {},
  }: AxiosType) => {
    console.log("Funksiya ishlayapti...");
    console.log("URL:", url);
    console.log("Header:", header); // Tekshirish uchun

    return axios({
      url: `${import.meta.env.VITE_BASE_URL}/${url}`,
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
        ...header, // Endi ishlaydi
      },
      data: body,
      params: {
        ...params,
      },
    })
      .then((res) => {
        console.log("Muvaffaqiyatli so'rov:", res.data);
        return res.data;
      })
      .catch((error) => {
        throw error;
      });
  };

  return request;
};
