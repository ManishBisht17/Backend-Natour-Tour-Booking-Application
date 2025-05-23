import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51QV6bXAudVCX5mOfPj89rhlnViHZlbNkYX63vIVP7cfbmnngjQIQZxw6fQCueMFjR7ALQ5YsPQaIk5Q7BeRidQMh00kmarCpyG'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`api/v1/bookings/checkout-session/${tourId}`);
    console.log(session)
    // 2) Create checkout form + charge credit card
    const checkoutPageUrl = session.data.session.url;
    window.location.assign(checkoutPageUrl);
  } catch (error) {
    showAlert('error', error);
  }
};
