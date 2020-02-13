import React, { useState, useEffect } from "react";
import { Collapse, Button } from "react-bootstrap";

const Example = ({ alloldGames, openHashModel }) => {
  const [open, setOpen] = useState(false);
  const [array, setArray] = useState([]);

  useEffect(() => {
    setArray(alloldGames);
  }, [array]);

  const handleOpenClose = id => {
    let onOf = array.filter(el => el.gamehash === id);
    if (onOf.length > 0) {
      if (onOf[0].collpase === false) {
        onOf[0].collpase = true;
        setArray(...array,onOf);
      } else if (onOf[0].collpase === true) {
        onOf[0].collpase = false;
        setArray(...array,onOf);
      }
    }
  };
  return (
    <>
      {array.map((alldata, i) => {
        return (
          <div className="row product" id={i}>
            <div className="col-md-12">
              <Button
                onClick={handleOpenClose.bind(this, alldata.gamehash)}
                aria-controls="example-collapse-text"
                aria-expanded={alldata.collpase}
              >
                click
              </Button>
              <Collapse in={alldata.collpase}>
                <div id="example-collapse-text">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </Collapse>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Example;
