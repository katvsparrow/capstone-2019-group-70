// Common Functions
import moment from "moment";

export function getDateTimeString(str) {
    return moment(str).format('Do MMMM, YYYY');
};

export function formatPreview(text, limit) {
    return "\"" + text.substring(0, limit) + "...\"";
}
