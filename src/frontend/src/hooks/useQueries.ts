import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitWish() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (text: string) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.submitWish(text);
    },
    onSuccess: () => {
      // Invalidate wishes list so it refetches
      queryClient.invalidateQueries({ queryKey: ['wishes'] });
    },
  });
}

export function useGetAllWishes() {
  const { actor, isFetching } = useActor();

  return useQuery<string[]>({
    queryKey: ['wishes'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllWishes();
    },
    enabled: !!actor && !isFetching,
  });
}
