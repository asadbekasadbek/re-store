import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter } from "react-router-dom";
import App from "./components/app/app";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import BookstoreService from "./services/bookstore-service";
import {BookstoreServiceProvider} from "./components/bookstore-service-context/bookstore-service-context";
import store from "./store";


const root = ReactDOM.createRoot(document.getElementById('root'));
const bookstoreService = new BookstoreService();
root.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </BookstoreServiceProvider>
    </ErrorBoundry>

  </Provider>
);


