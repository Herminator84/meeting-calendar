import React, { useState } from 'react';
import ReactPaginate from 'react-paginate'; // Install: npm install react-paginate
import { Modal, Button } from 'react-bootstrap'; // Install: npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is loaded

const Invitations = () => {
  // Sample invitations data
  const [invitations, setInvitations] = useState([
    { id: 1, title: 'Team Meeting', date: '2024-12-05', time: '10:00 AM', location: 'Zoom', status: 'pending' },
    { id: 2, title: 'Client Call', date: '2024-12-06', time: '2:00 PM', location: 'Microsoft Teams', status: 'accepted' },
    { id: 3, title: 'Project Review', date: '2024-12-07', time: '3:30 PM', location: 'Office - Room 301', status: 'declined' },
    { id: 4, title: 'Weekly Sync', date: '2024-12-08', time: '11:00 AM', location: 'Zoom', status: 'pending' },
    { id: 5, title: 'Sprint Planning', date: '2024-12-09', time: '1:00 PM', location: 'Google Meet', status: 'pending' },
    { id: 6, title: 'One-on-One', date: '2024-12-10', time: '4:00 PM', location: 'Office - Room 101', status: 'pending' },
  ]);

  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const [showModal, setShowModal] = useState(false);
  const [selectedInvitation, setSelectedInvitation] = useState(null);

  // Filter invitations based on status
  const filteredInvitations = invitations.filter((invitation) =>
    statusFilter === 'all' ? true : invitation.status === statusFilter
  );

  // Handle pagination
  const pageCount = Math.ceil(filteredInvitations.length / itemsPerPage);
  const handlePageChange = (data) => setCurrentPage(data.selected);
  const paginatedInvitations = filteredInvitations.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Handle modal
  const handleShowDetails = (invitation) => {
    setSelectedInvitation(invitation);
    setShowModal(true);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Invitations</h2>

      {/* Filter Dropdown */}
      <select
        className="form-select mb-3"
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="accepted">Accepted</option>
        <option value="declined">Declined</option>
      </select>

      {/* Invitations Table */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Invitation</th>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedInvitations.map((invitation, index) => (
            <tr key={invitation.id}>
              <td>{currentPage * itemsPerPage + index + 1}</td>
              <td>{invitation.title}</td>
              <td>{invitation.date}</td>
              <td>{invitation.time}</td>
              <td>{invitation.location}</td>
              <td>
                <span
                  className={`badge ${
                    invitation.status === 'pending'
                      ? 'bg-warning text-dark'
                      : invitation.status === 'accepted'
                      ? 'bg-success'
                      : 'bg-danger'
                  }`}
                >
                  {invitation.status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-info btn-sm me-2"
                  onClick={() => handleShowDetails(invitation)}
                >
                  Details
                </button>
                <button className="btn btn-success btn-sm me-2">Accept</button>
                <button className="btn btn-danger btn-sm">Decline</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
      />

      {/* Details Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Invitation Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedInvitation && (
            <>
              <p><strong>Title:</strong> {selectedInvitation.title}</p>
              <p><strong>Date:</strong> {selectedInvitation.date}</p>
              <p><strong>Time:</strong> {selectedInvitation.time}</p>
              <p><strong>Location:</strong> {selectedInvitation.location}</p>
              <p><strong>Status:</strong> {selectedInvitation.status}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Invitations;
