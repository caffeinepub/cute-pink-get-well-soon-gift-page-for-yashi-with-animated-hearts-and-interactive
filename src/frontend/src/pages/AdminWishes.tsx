import { useGetAllWishes } from '../hooks/useQueries';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RefreshCw } from 'lucide-react';

export default function AdminWishes() {
  const { data: wishes, isLoading, error, refetch, isFetching } = useGetAllWishes();

  const handleRefresh = () => {
    refetch();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-700 dark:text-pink-300 mb-4">
            Admin: All Wishes
          </h1>
          <Button
            onClick={handleRefresh}
            disabled={isFetching}
            variant="outline"
            size="lg"
            className="border-pink-300 hover:bg-pink-50 dark:border-pink-700 dark:hover:bg-pink-950"
          >
            <RefreshCw className={`w-5 h-5 mr-2 ${isFetching ? 'animate-spin' : ''}`} />
            {isFetching ? 'Refreshing...' : 'Refresh'}
          </Button>
        </div>

        <Card className="shadow-xl border-2 border-pink-200 dark:border-pink-800">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-pink-700 dark:text-pink-300">
              {isLoading ? 'Loading wishes...' : `${wishes?.length || 0} Wish${wishes?.length !== 1 ? 'es' : ''} Received`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent"></div>
                <p className="mt-4 text-pink-600 dark:text-pink-400">Loading wishes...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <p className="text-red-600 dark:text-red-400">
                  Failed to load wishes. Please try again.
                </p>
              </div>
            )}

            {!isLoading && !error && wishes && wishes.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-pink-600 dark:text-pink-400">
                  No wishes yet. 🌸
                </p>
                <p className="text-sm text-pink-500 dark:text-pink-500 mt-2">
                  Wishes will appear here once they are submitted.
                </p>
              </div>
            )}

            {!isLoading && !error && wishes && wishes.length > 0 && (
              <ScrollArea className="h-[500px] pr-4">
                <div className="space-y-4">
                  {wishes.map((wish, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">💖</span>
                        <div className="flex-1">
                          <p className="text-lg text-gray-800 dark:text-gray-200 whitespace-pre-wrap break-words">
                            {wish}
                          </p>
                          <p className="text-xs text-pink-500 dark:text-pink-400 mt-2">
                            Wish #{index + 1}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
