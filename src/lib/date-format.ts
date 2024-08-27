type Props = {
  dateString: Date;
};

export const dateFormat = (props: Props) => {
  const { dateString } = props;
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "short", year: "numeric" };

  //   @ts-ignore
  const formattedDate = date
    .toLocaleDateString("en-GB", options)
    .replace(/ /g, " ");

  return formattedDate;
};
