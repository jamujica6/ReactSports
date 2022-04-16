import axios from "axios";

const productsActions = {
  addProduct: (productData) => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.post(`https://reactsport.herokuapp.com/api/allGoods/`, {
          productData,
        });
        dispatch({
          type: "message",
          payload: {
            view: true,
            message: "Product uploaded",
            success: res.data.success,
          },
        });
        return res;
      } catch (error) {
        console.log(error);
      }
    };
  },

  modifyProduct: (prodId, toModifyProduct) => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.put(
          "https://reactsport.herokuapp.com/api/allGoodsId/" + prodId,
          { ...toModifyProduct }
        );
        dispatch({
          type: "message",
          payload: {
            view: true,
            message: res.data.message,
            success: res.data.success,
          },
        });

        return res;
      } catch (err) {
        console.log(err);
      }
    };
  },

  deleteProduct: (id) => {
    return async (dispatch, getState) => {
      const res = await axios.delete(
        `https://reactsport.herokuapp.com/api/allGoodsId/${id}`
      );
      dispatch({
        type: "message",
        payload: {
          view: true,
          message: "The product has been deleted!",
          success: res.data.success,
        },
      });
      return res;
    };
  },
};

export default productsActions;
