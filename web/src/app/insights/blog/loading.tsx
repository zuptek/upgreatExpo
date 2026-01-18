export default function Loading() {
    return (
        <div className="min-h-screen py-20">
            <div className="container px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="h-12 bg-muted rounded-md w-3/4 mx-auto mb-6 animate-pulse" />
                    <div className="h-6 bg-muted rounded-md w-1/2 mx-auto animate-pulse" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-card border border-border rounded-xl overflow-hidden h-[400px]">
                            <div className="h-48 bg-muted animate-pulse" />
                            <div className="p-6 space-y-4">
                                <div className="h-4 bg-muted rounded w-1/3 animate-pulse" />
                                <div className="h-8 bg-muted rounded w-full animate-pulse" />
                                <div className="h-4 bg-muted rounded w-2/3 animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
