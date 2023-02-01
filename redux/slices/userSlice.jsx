import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Toastor from "../../components/Toastor";

const initialState = {
  user: {},
  loading: false,
  error: [],
};

export const signin = createAsyncThunk(
  "auth/signin",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post(
        "http://192.168.0.181:5000/api/users/signin",
        {
          email: args.email,
          password: args.password,
        },
        {
          withCredentials: true,
        }
      );

      return data.data.user;
    } catch (err) {
      console.log(err.message);
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const editUser = createAsyncThunk(
  "auth/editUser",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      console.log(args);

      const { data } = await axios.patch(
        "http://localhost:5000/api/users/",
        args,
        {
          withCredentials: true,
        }
      );

      return data.data.user;
    } catch (err) {
      err.response.data.error.map((err) => console.log(err.message));

      return rejectWithValue(err.response.data.error);
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users/signup",
        {
          email: args.email,
          name: args.name,
          password: args.password,
          passwordConfirmation: args.passwordConfirm,
        }
      );
      return data.data.user;
    } catch (err) {
      err.response.data.error.map((err) => console.log(err.message));

      return rejectWithValue(err.response.data.error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get("http://localhost:5000/api/users/", {
        withCredentials: true,
      });
      return data.data.user;
    } catch (err) {
      err.response.data.error.map((err) => console.log(err.message));

      return rejectWithValue(err.response.data.error);
    }
  }
);

export const signoutCurrentUser = createAsyncThunk(
  "auth/signoutCurrentUser",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await axios.post(
        "http://localhost:5000/api/users/signout",
        {},
        {
          withCredentials: true,
        }
      );
      return;
    } catch (err) {
      err.response.data.error.map((err) => console.log(err.message));

      return rejectWithValue(err.response.data.error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(signup.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(signin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(signin.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(signin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(getCurrentUser.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(getCurrentUser.rejected, (state, action) => {
      state.user = {};
      state.error = "";
    });
    builder.addCase(signoutCurrentUser.fulfilled, (state, action) => {
      state.user = {};
    });

    builder.addCase(editUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
  },
});

export default userSlice;
