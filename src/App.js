/* eslint-disable no-undef */
import React, { Component } from 'react';
import Button from './components/button/Button';
import ImageGallery from './components/imageGallery/ImageGallery';
import Loader from './components/loader/Loader';
import Searchbar from './components/searchbar/Searchbar';
import pixabayApi from './servicesApi/pixabay-api';
import Modal from './components/modal/Modal';

export class App extends Component {
  state = {
    photos: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: '',
    alt: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPhotos();
    }
  }

  onChangeQuaery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      photos: [],
      error: null,
    });
  };

  fetchPhotos = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };

    this.setState({ isLoading: true });

    pixabayApi
      .fatchPhotos(options)
      .then(
        hits => {
          this.setState(prevState => ({
            photos: [...prevState.photos, ...hits],
            currentPage: prevState.currentPage + 1,
          }));
          console.log(hits);
        },
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        }),
      )
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  toggleModal = (url, tag) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: url,
      tag: tag,
    }));
  };

  render() {
    const { photos, isLoading, error, showModal, largeImageURL, tag } =
      this.state;
    const shouldRenderLoadMoreBtn = photos.length > 0 && !isLoading;
    return (
      <div className="App">
        {showModal && (
          <Modal onClose={this.toggleModal} url={largeImageURL} tag={tag} />
        )}
        {error && <h1>'Error!!!'</h1>}

        <Searchbar onSubmit={this.onChangeQuaery} />

        {isLoading && <Loader />}

        <ImageGallery photos={photos} toggleModal={this.toggleModal} />

        {shouldRenderLoadMoreBtn && <Button fetchArticles={this.fetchPhotos} />}
      </div>
    );
  }
}

export default App;
