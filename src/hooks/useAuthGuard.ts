import { useAppSelector } from "@/redux/hooks";


export default function useAuthGuard() {
  const user = useAppSelector((state) => state.app.user);
  const isAuthenticated = Boolean(user);

  const requireAuth = (
    onSuccess: () => void,
    onFail?: () => void
  ): void => {
   if (isAuthenticated) {
  onSuccess();
} else {
  onFail?.();
}
  };

  return {
    user,
    isAuthenticated,
    requireAuth,
  };
}
