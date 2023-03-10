import React, { useContext } from "react";
import { dataContaxt } from "../App";
import "./AdminPanel.css";
export const AdmiPanel = () => {
  const userData = useContext(dataContaxt);
  return (
    <div>
      <section>
        <div className="Page">
          <div className="Panel">
            <h2 className="Panel__heading">Admin Panel</h2>
            <div>
              <button className="Panel__button">Option</button>
            </div>
            <div>
              <button className="Panel__button">Static Page</button>
            </div>
            <div>
              <button className="Panel__button">Posts</button>
            </div>
            <div>
              <button className="Panel__button">Modules</button>
            </div>
            <div>
              <button className="Panel__button">Navigation Link</button>
            </div>
            <div>
              <button className="Panel__button">Mailing List</button>
            </div>
            <div>
              <button className="Panel__button">Theame</button>
            </div>
            <a href="" className="Panel__link">
              Logout
            </a>
          </div>
          <div>
            <div className="NavigationPage">
              <h2>{userData.user[0].userName}</h2>
              <br />
              <div className="Table">
                <table className="">
                  <thead>
                    <tr>
                      <th className="Table__head Table--headingColor">URL</th>
                      <th className="Table__head Table--headingColor">NAME</th>
                      <th className="Table__head Table--headingColor">EDIT</th>
                      <th className="Table__head Table--headingColor">MOVE</th>
                      <th className="Table__head Table--headingColor">
                        VISIBLE
                      </th>
                      <th className="Table__head Table--headingColor">
                        DELETE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="Table__data">/</td>
                      <td className="Table__data">HOME</td>
                      <td className="Table__data">
                        <button className="Table__ActionBtn bgcolor">
                          Edit
                        </button>
                      </td>
                      <td className="Table__data">
                        <button className="bgcolor1">&#9660;</button>
                      </td>
                      <td className="Table__data">
                        <button className="Table__ActionBtn">Visible</button>
                      </td>
                      <td className="Table__data">&#x274c;</td>
                    </tr>
                    <tr>
                      <td className="Table__data">/Post</td>
                      <td className="Table__data">Post</td>
                      <td className="Table__data">
                        <button className="Table__ActionBtn bgcolor">
                          Edit
                        </button>
                      </td>
                      <td className="Table__data">
                        <button className="bgcolor1">&#9660;</button>{" "}
                        <button className="bgcolor1">&#9660;</button>
                      </td>
                      <td className="Table__data">
                        <button className="Table__ActionBtn">Visible</button>
                      </td>
                      <td className="Table__data">&#x274c;</td>
                    </tr>
                    <tr>
                      <td className="Table__data">/Contact</td>
                      <td className="Table__data">Contact</td>
                      <td className="Table__data">
                        <button className="Table__ActionBtn bgcolor">
                          Edit
                        </button>
                      </td>
                      <td className="Table__data">
                        <button className="bgcolor1">&#9660;</button>
                      </td>
                      <td className="Table__data">
                        <button className="Table__ActionBtn">Visible</button>
                      </td>
                      <td className="Table__data">&#x274c;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="Bottom">
                <h2>Quick Link</h2>
                <button className="Bottom__Button bgcolor">
                  Link static page
                </button>
                <button className="Bottom__Button bgcolor">Link Post</button>
                <button className="Bottom__Button bgcolor">Link Module</button>
                <h2>Add new Link</h2>
                <input type="text" />
                <input type="text" />
                <button className="Bottom__Button bgcolor">Add</button>
                <h2>Options</h2>
                <b>Navigation Link spacer</b>
                <select name="" id="">
                  <option value="">Wider space</option>
                </select>

                <p>Set the spacing between the navigation links</p>
                <hr />
                <button className="Bottom__Button bgcolor">Save</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
