import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callback);

      ///remove this event after movie closed
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },

    [action, key],
  );
}
