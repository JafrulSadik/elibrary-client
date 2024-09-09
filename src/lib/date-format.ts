type Props = {
  dateString: Date;
};

export const dateFormat = (props: Props) => {
  const { dateString } = props;
  const date = new Date(dateString);

  const splitDate = date.toDateString().split(" ");

  console.log({ date: splitDate.at(-1) });

  console.log({ splitDate });

  // @ts-ignore
  const formattedDate =
    splitDate.at(-2) + " " + splitDate.at(-3) + " " + splitDate.at(-1);

  return formattedDate;
};
