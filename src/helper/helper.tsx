export const numberFormat = (
  number: number,
  decimals: number,
  dec_point: string,
  thousands_sep: string
) => {
  const clearNumber = String(number).replace(/[^0-9+\-Ee.]/g, "");
  let prepareNumery = !isFinite(+clearNumber) ? 0 : +clearNumber,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
    dec = typeof dec_point === "undefined" ? "." : dec_point,
    numberTransfort: string | string[] = "",
    toFixedFix = function (n: number, prec: number) {
      var k = Math.pow(10, prec);
      return "" + Math.round(n * k) / k;
    };
  numberTransfort = (
    prec ? toFixedFix(prepareNumery, prec) : "" + Math.round(prepareNumery)
  ).split(".");
  if (numberTransfort[0].length > 3) {
    numberTransfort[0] = numberTransfort[0].replace(
      /\B(?=(?:\d{3})+(?!\d))/g,
      sep
    );
  }
  if ((numberTransfort[1] || "").length < prec) {
    numberTransfort[1] = numberTransfort[1] || "";
    numberTransfort[1] += new Array(prec - numberTransfort[1].length + 1).join(
      "0"
    );
  }
  return numberTransfort.join(dec);
};
