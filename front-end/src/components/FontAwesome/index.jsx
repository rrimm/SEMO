import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

// TODO: Refactor - svg로 옮기기
export function House() {
  return <FontAwesomeIcon icon={faHouse} />;
}

export function RotateLeft() {
  return <FontAwesomeIcon icon={faRotateLeft} />;
}
