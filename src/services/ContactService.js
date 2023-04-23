import axios from 'axios';

export default {
  submitForm(name, email, message) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    return axios.post("/api/contact/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        const { status, name } = response.data;
        if (status === 'success' && name) {
          const msg = `已收到${name}的訊息，謝謝${name}!`;
          alert(msg); 
        } else {
          console.error('回應資料不正確');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
};