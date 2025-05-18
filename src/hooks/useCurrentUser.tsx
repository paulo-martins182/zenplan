import { useEffect, useState } from "react";
import { getCurrentUser } from "@aws-amplify/auth";

export const useCurrentUser = () => {
  const [user, setUser] = useState<unknown | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading };
};
