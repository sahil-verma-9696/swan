
export default function userAuth({ store }) {
  return async (_) => {
    // TODO: Get user from backend

    const user = await new Promise(async (resolve, reject) => {
      setTimeout(() => {
        resolve({
          user: {
            name: "John Doe",
            username: "@John Doe",
            image:
              "https://images.unsplash.com/photo-1615322678402-04b477522be7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG5hcnV0b3xlbnwwfHwwfHx8MA%3D%3D",
          },
        });
      }, 5000);
    });

    let nonCriticalData = new Promise((res) =>
      setTimeout(() => res("non-critical"), 5000)
    );


    return { user: user.user, nonCriticalData };
  };
}
