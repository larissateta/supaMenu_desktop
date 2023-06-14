import React, { useEffect, useState } from "react";
import styled from "styled-components";

import authStorage from "../auth/storage";
import Sidebar from "../components/Sidebar";
import DashboardTopNav from "../components/DashboardTopNav";
import jwtDecode from "jwt-decode";
import COLOR_PALETTE from "../constants/colors";
import AddClient from "../modals/AddClient";
import ClientContext from "../contexts/index";
import clientsApi from "../api/clients";

function ClientsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = authStorage.getToken();
  const user = jwtDecode(token);

  const closeModal = () => {
    setIsOpen(false);
  };

  const fetchClients = async () => {
    setLoading(true);
    const result = await clientsApi.getAllClients();
    setLoading(false);

    if (result.ok) setClients(result.data.clients);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <ClientContext.Provider value={{ clients, setClients }}>
      <Container>
        <Sidebar />
        <Wrapper>
          <DashboardTopNav user={user} title={"Clients"} />
          <Content>
            <div className="add-new">
              <div>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    textAlign: "left",
                  }}
                >
                  New Client
                </span>
              </div>
              <div className="add-client">
                <span style={{ color: COLOR_PALETTE.GRAY }}>
                  Add a new client
                </span>
                <i
                  className="fa-solid fa-plus"
                  onClick={() => setIsOpen(true)}
                ></i>
              </div>
            </div>

            <AddClient closeModal={closeModal} isOpen={isOpen} />

            <div className="table-container">
              <div className="table-top">
                <h3>All Clients</h3>
                <div className="icons-container">
                  <div>
                    <i className="fa-sharp fa-solid fa-sort"></i>
                    <span>Sort</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-filter"></i>
                    <span>Filter</span>
                  </div>
                </div>
              </div>

              <div className="table">
                {loading ? (
                  <Loader style={{fontSize: 17}}>Loading clients......</Loader>
                ) : (
                  <table>
                    <thead>
                      <tr>
                        <th>Clients details</th>
                        <th>Sales</th>
                        <th>Detailed report</th>
                        <th>Category</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {clients.map((client, index) => (
                        <tr key={index}>
                          <td>{client.name}</td>
                          <td>{client.sales + " Frw"}</td>
                          <td>
                            <i
                              className="fa-solid fa-eye"
                              style={{ color: COLOR_PALETTE.PRIMARY }}
                            ></i>
                          </td>
                          <td>
                            <span
                              style={{
                                background: COLOR_PALETTE.LIGHT_DARK,
                                color: COLOR_PALETTE.WHITE,
                                paddingTop: 8,
                                paddingBottom: 7,
                                paddingRight: 10,
                                paddingLeft: 10,
                                width: 100,
                                borderRadius: 15,
                                fontSize: 14
                              }}
                            >
                              {client.category}
                            </span>
                          </td>
                          <td>
                            <i
                              className="fa-solid fa-ellipsis-vertical"
                              style={{ cursor: "pointer" }}
                            ></i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </Content>
        </Wrapper>
      </Container>
    </ClientContext.Provider>
  );
}

const Container = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  background-color: ${COLOR_PALETTE.LIGHT};
`;

const Wrapper = styled.div`
  width: 80%;
  margin-left: 20%;
  padding: 10px;
`;

const Content = styled.div`
  .add-new {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      width: 30%;
      padding: 10px;
      i {
        cursor: pointer;
        background-color: ${COLOR_PALETTE.GRAY};
        padding: 5px;
        border-radius: 15px;
        color: ${COLOR_PALETTE.LIGHT};
      }
    }

    .add-client {
      border-bottom: 2px solid ${COLOR_PALETTE.GRAY};
    }
  }

  .table-container {
    background-color: ${COLOR_PALETTE.WHITE};
    border: 2px solid ${COLOR_PALETTE.GRAY};
    border-radius: 5px;
    margin-top: 20px;

    div.table-top {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      div.icons-container {
        display: flex;
        div {
          margin-left: 20px;
          span {
            margin-left: 5px;
          }
          i {
            cursor: pointer;
          }
        }
      }
    }

    div.table {
      table {
        border-collapse: collapse;
        th,
        td {
          padding: 15px;
          width: 25%;
          color: ${COLOR_PALETTE.GRAY};
          text-align: left;
          border-bottom: 2px solid ${COLOR_PALETTE.GRAY};
          font-weight: bold;
        }
        td {
          color: ${COLOR_PALETTE.BLACK};
        }
        th:nth-child(1) {
          padding: 3px;
        }
      }
    }
  }
`;
const Loader = styled.span`
text-align: center;
font-size: 24px;
font-weight: bold;
display: block;
margin: 10px;
`
export default ClientsPage;
