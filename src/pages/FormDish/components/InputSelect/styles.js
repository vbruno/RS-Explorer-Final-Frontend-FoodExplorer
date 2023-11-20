import styled from "styled-components";
import * as Select from "@radix-ui/react-select";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  border: none;
  background: transparent;

  gap: 1.6rem;

  > header {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    /* Roboto/Small regular */
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }
`;

export const SelectTrigger = styled(Select.Trigger)`
  /* all: unset; */

  width: 100%;
  height: 48px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 1.6rem;

  border-radius: 8px;
  border: none;

  background: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  > span:first-child {
    width: 100%;
    text-align: left;

    /* Roboto/Smaller regular */
    font-family: "Roboto";
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
  }

  > span:last-child {
    width: 2.4rem;
    height: 2.4rem;
  }

  &:hover {
    background: ${({ theme }) => theme.COLORS.DARK_1000};
  }
`;

export const SelectContent = styled(Select.Content)`
  width: 100%;
  overflow: "hidden";
  background: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 8px;
`;

export const SelectViewport = styled(Select.Viewport)`
  padding: 5px;
`;

export const StyledItem = styled(Select.Item)`
  width: 100%;
  height: 16px;
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  align-items: center;

  /* Roboto/Smaller regular */
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */

  &[data-highlighted] {
    /* outline: none; */
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }
`;

export const StyledItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 6px;
  width: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
