import React from "react";
import { Input, InputProps } from "./Input";
import { Button } from "../Buttons/Button";
import Icon from "../Icon";

interface Props extends InputProps {
  onClear?: React.MouseEventHandler<HTMLButtonElement>;
  onSearch?: () => void;
  type?: "text";
}

const SearchInput = React.forwardRef<HTMLInputElement, Props>(
  (
    { onClear, onKeyDown, onSearch, value, grouped, className, ...props },
    ref
  ) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onSearch && onSearch();
      }

      if (onKeyDown) onKeyDown(e);
    };

    const handleClickCloseBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onClear && onClear(e);
    };

    const handleClickSearchBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onSearch && onSearch();
    };

    const CloseButton =
      value && onClear ? (
        <Button
          variant="icon"
          name="close-button"
          onClick={handleClickCloseBtn}
          className="search-clear"
          style={{
            ...(!grouped ? { right: "36px" } : {}),
            background: "#ffffff",
          }}
        >
          <Icon name="Close" />
        </Button>
      ) : null;

    const SearchButton =
      !grouped && onSearch ? (
        <Button
          variant="icon"
          className="search-submit"
          onClick={handleClickSearchBtn}
        >
          <Icon name="Magnifier" color="#0057B6" />
        </Button>
      ) : null;

    return (
      <Input
        className={`search-input${className ? ` ${className}` : ""}`}
        value={value}
        onKeyDown={handleKeyDown}
        {...props}
        ref={ref}
      >
        {CloseButton}
        {SearchButton}
      </Input>
    );
  }
);

SearchInput.displayName = "SearchInput";

export { SearchInput };
