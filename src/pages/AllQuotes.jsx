import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {id: "q1", author: "Jeff", text: "Focus on your customers."},
  {id: "q2", author: "Warren", text: "You need a good temperament."},
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
};

export default AllQuotes;