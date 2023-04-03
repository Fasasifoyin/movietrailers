import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import SearchResult from "./SearchResult";

export default function Searchbar() {
  const [SearchQuery, setSearchQuery] = useState(``);
  const [resultBox, setResultBox] = useState(false);

  useEffect(() => {
    if (SearchQuery !== "") {
      setResultBox(true);
    } else {
      setResultBox(false);
    }
  }, [SearchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery("");
  };

 

  return (
    <div className="position-relative">
      <Form onSubmit={handleSubmit}>
        <div className="position-relative">
          <input
            type="text"
            placeholder="Search Movies & People"
            className="border-0 border-bottom bg-dark text-white"
            value={SearchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {SearchQuery.length > 0 ? (
            <AiOutlineClose
              type="submit"
              className="text-white position-absolute top-50 end-0 translate-middle-y"
              onClick={() => {
                setSearchQuery("");
                setResultBox(false);
              }}
            />
          ) : (
            <FiSearch
              type="submit"
              className="text-white position-absolute top-50 end-0 translate-middle-y"
            />
          )}
        </div>
      </Form>
      {resultBox && <SearchResult SearchQuery={SearchQuery} setResultBox={setResultBox}/>}
    </div>
  );
}
