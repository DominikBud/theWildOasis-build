import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { deleteCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabins";
import { HiPencil, HiTrash, HiSquare2Stack } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const [isLoading, deleteCabin] = useDeleteCabin();
  const [isCreating, createCabin] = useCreateCabin();

  const { maxCapacity, regularPrice, discount, image, description } = cabin;

  function handleCabinCreation() {
    createCabin({ maxCapacity, regularPrice, discount, image, description });
  }

  return (
    <>
      <Table.Row role="row">
        <Img src={cabin.image} />
        <Cabin>{cabin.name}</Cabin>
        <div>Fits up to {cabin.maxCapacity} guests</div>
        <Price>{formatCurrency(cabin.regularPrice)}</Price>
        {cabin.discount == null ? (
          <span>-</span>
        ) : (
          <Discount>{formatCurrency(cabin.discount)}</Discount>
        )}
        <div>
          <Modal>
            <Menus>
              <Menus.Toggle id={cabin.id} />
              <Menus.List id={cabin.id}>
                <Menus.Button
                  icon={<HiSquare2Stack />}
                  onClick={() => handleCabinCreation()}
                >
                  Duplicate
                </Menus.Button>
                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>
            </Menus>

            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                onConfirm={() => deleteCabin(cabin.id)}
                name="delete"
              ></ConfirmDelete>
            </Modal.Window>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
}

export default CabinRow;
